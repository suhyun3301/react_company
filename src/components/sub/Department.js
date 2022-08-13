import SubLayout from '../common/SubLayout'

function Department() {
  const subtitle = {
    title: 'About Trello',
    p: 'What’s behind the boards.',
  }

  return <SubLayout name="department" sub={subtitle}></SubLayout>
}

export default Department
