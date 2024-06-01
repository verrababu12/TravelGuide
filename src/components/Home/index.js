import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Package from '../Package'

import {
  TravelGuideContainer,
  Heading,
  PackagesContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {apiStatus: apiStatusConstants.initial, travelPackages: []}

  componentDidMount() {
    this.getTravelPackages()
  }

  getTravelPackages = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const travelGuidePackagesApiUrl = `https://apis.ccbp.in/tg/packages`
    const travelPackagesResponse = await fetch(travelGuidePackagesApiUrl)
    if (travelPackagesResponse.ok === true) {
      const travelPackages = await travelPackagesResponse.json()
      // console.log(travelPackages)
      const formattedTravelPackages = travelPackages.packages.map(
        eachPackage => ({
          name: eachPackage.name,
          id: eachPackage.id,
          description: eachPackage.description,
          imageUrl: eachPackage.image_url,
        }),
      )
      this.setState({
        apiStatus: apiStatusConstants.success,
        travelPackages: formattedTravelPackages,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" height={50} width={50} color="#52bbf0" />
    </LoaderContainer>
  )

  renderPackages = () => {
    const {travelPackages} = this.state
    return (
      <PackagesContainer>
        {travelPackages.map(eachPackage => (
          <Package packageDetails={eachPackage} key={eachPackage.id} />
        ))}
      </PackagesContainer>
    )
  }

  renderApiStatusResults = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderPackages()
      default:
        return null
    }
  }

  render() {
    return (
      <TravelGuideContainer>
        <Heading>Travel Guide</Heading>
        {this.renderApiStatusResults()}
      </TravelGuideContainer>
    )
  }
}

export default Home
