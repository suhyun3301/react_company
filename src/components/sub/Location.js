import SubLayout from '../common/SubLayout'

function Location() {
  const subtitle = {
    title: 'Contact support',
    p: 'For specific account or billing questions, security concerns, or answers not available on our help site, we’re happy to help.',
  }

  return <SubLayout name="location" sub={subtitle}></SubLayout>
}

export default Location
