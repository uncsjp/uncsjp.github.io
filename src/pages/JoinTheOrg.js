import Container from '../utilities/Container'
import TextBox from '../utilities/TextBox'

const triangle_orgs_init = [
    {
        "name": "community justice & abolition collective",
        "logohref": "/logos/cjac.jpg",
        "description": "abolition and mutual aid in chapel hill",
        "links": []
    },
    {
        "name": "Triangle Branch of the Party For Socialism and Liberation",
        "logohref": "/logos/trianglepsl.jpg",
        "description": "The Triangle, NC Branch of the Party for Socialism and Liberation, fighting for socialism in the South!",
        "links": []
    },
    {
        "name": "Monsoon",
        "logohref": "/logos/monsoon.jpg",
        "description": "UNC's foremost South Asian American-interest (but not exclusive) magazine, community & advocacy platform 🥭",
        "links": []
    },
    {
        "name": "PalYouthNC",
        "logohref": "/logos/palyouthnc.jpg",
        "description": "Palestinian & Arab youth in the RTP committed to the liberation of our homeland!🇵🇸",
        "links": []
    },
    {
        "name": "UNC Graduate Students for the Liberation of Palestine",
        "logohref": "/logos/gslp.jpg",
        "description": "We are graduate and professional students at UNC–CH standing in solidarity with the Palestinian people against apartheid, genocide, and occupation.",
        "links": []
    },
    {
        "name": "transparUNCy",
        "logohref": "/logos/transparuncy.jpg",
        "description": "Who controls your education, how they do it, and what they don’t want you to know.",
        "links": []
    },
    {
        "name": "UNC Faculty for Justice in Palestine",
        "logohref": "/logos/fjp.jpg",
        "description": "Collective of UNC faculty and staff organizing for Palestinian liberation and self-determination.",
        "links": []
    },
    {
        "name": "Siembra UNC",
        "logohref": "/logos/siembranc.jpg",
        "description": "UNC Chapter of Siembra NC. We fight for the rights of our community. Your favorite student org’s student org.",
        "links": []
    },
    {
        "name": "The Southern Student Action Coalition (SSAC)",
        "logohref": "/logos/ssac.jpg",
        "description": "Creating intersectional, intergenerational, and anti-imperialist action, rooted in the South's progressive history. UNC & BEYOND! 🍉",
        "links": []
    },
    {
        "name": "The Workers Union At UNC (UE Local 150)",
        "logohref": "/logos/wu.jpg",
        "description": "We are a chapter of UE Local 150 representing workers at UNC Chapel Hill.",
        "links": []
    },
    {
        "name": "NC State SJP",
        "logohref": "/logos/ncsusjp.jpg",
        "description": "NC State's chapter of Students for Justice in Palestine. A political organization fighting for the freedom of Palestine and its people #FreePalestine",
        "links": []
    },
    {
        "name": "the outside agitator",
        "logohref": "/logos/outsideag.jpg",
        "description": "a new radical tradition. @cjacollective publication. chapel hill & beyond",
        "links": []
    },
    {
        "name": "Amazon Cause",
        "logohref": "/logos/cause.jpg",
        "description": "Carolina Amazonians United for Solidarity and Empowerment",
        "links": []
    }
];

const OrgCard = ({org}) => {
    return (
        <Container bg_color={"bg-red-300"}>
            <div className="flex flex-row">
                <div className="m-0.5 mr-2 flex items-center flex-shrink-0">
                    <img className="rounded-full h-12 w-12" src={org.logohref} alt={org.name} />
                </div>
                <div className="flex flex-col">
                    <div className="m-0.5">
                        {org.name}
                    </div>
                    <div className="m-0.5">
                        {org.description}
                    </div>
                </div>
            </div>
        </Container>
    )
}

const JoinTheOrg = () => {
    const triangle_orgs = triangle_orgs_init;

    return (
        <div className="flex flex-col md:flex-row w-full justify-center">
            <div className="contents md:flex md:flex-col w-3/5">
                <TextBox
                    header={"Join SJP!"}
                />
                {/* Interest Form */}
                {/* Newsletter */}
                {/* Coalition */}
            </div>
            <div className="contents md:flex md:flex-col w-2/5">
                <TextBox header={"Join other local orgs!"} />
                <Container>
                    {triangle_orgs.map(org => <OrgCard org={org} />)}
                </Container>
            </div>
        </div>
    )
}

export default JoinTheOrg
