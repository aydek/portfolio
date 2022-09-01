import '../style/About.scss';

export const About = () => {
    return (
        <div className="about__body section" id="about">
            <div className="text">
                <div className="big">About me...</div>
                <br></br>
                <div>My name is Kestutis, I am {getAge('09/15/1995')} years old.</div>
                <div>Lithuanian born, currently living in Leeds, United Kingdom.</div>
                <br></br>
                <div>I am passionate, punctual, friendly, quick learning person.</div>
                <div>I consider myself perfectionist when it comes to coding.</div>
                <br></br>
                <div>For the long time I wanted to be developer.</div>
                <div>I have started my coding experience creading mods for games,</div>
                <div>witch lead me to learning basic's of C proraming language.</div>
                <br></br>
                <div>My interest in web development came later, as I have starded creating UI elements.</div>
                <div>So I have started learning REACTJS and now I'm capable to develop full website.</div>
                <br></br>
                <div>Scroll down, there's more..</div>
                <br></br>
            </div>
        </div>
    );
};

const getAge = (dateString: string): number => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};
