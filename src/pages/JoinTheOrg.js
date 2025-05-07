import TextBox from '../utilities/TextBox'

const JoinTheOrg = () => {
    return (
      <div>
        <TextBox header={
         "Interested in signing up for updates?"
        } text={
          "Click here!"
        }/>
        <TextBox header={
          "Interested in organizing with SJP?"
        } text={
          "Click here!"
        }/>
        <TextBox header={
          "Interested in organizational partnership with SJP? (For community, political and student orgs)"
        } text={
          "Click here!"
        }/>
      </div>
    );
};

export default JoinTheOrg;
