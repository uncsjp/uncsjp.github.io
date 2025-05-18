import Container from '../utilities/Container'
import TextBox from '../utilities/TextBox'

const JoinTheOrg = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-center">
            <div className="contents md:flex md:flex-col">
                <TextBox
                    header={"Join SJP!"}
                />
                {/* Interest Form */}
                {/* Newsletter */}
                {/* Coalition */}
            </div>
            <div className="contents md:flex md:flex-col">
                <TextBox header={"Join other local orgs!"} />
                <Container>
                    <p>hello</p>
                </Container>
            </div>
        </div>
    )
}

export default JoinTheOrg
