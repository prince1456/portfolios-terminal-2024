const HomeComponent = () => {
  return (
    <ul className="py-2 list-item list-inside text-white">
      <li>- About</li>
      <li>- Experience</li>
      <li>- Skills</li>
      <li>- Contact</li>
    </ul>
  );
};
export const ContactComponent = () => {
  return (
    <ul className="text-white list-inside">
      <li>Phone: +1 604 704-0740</li>
      <li>
        Email: {' '}
        <a href="mailto:akbar.alizadeh5@gmail.com">
          akbar.alizadeh5@gmail.com
        </a>
      </li>
    </ul>
  );
};
export const HelpComponent = () => {
  return <p className="text-white">help, about, experience, skills, contact</p>;
};
export const AboutComponent = () => {
  return (
    <div className="text-white p-2 prose">
      I am a highly motivated and dedicated full-stack developer with a passion
      for solving complex problems and delivering high-quality software
      solutions. My experience spans a range of technologies and I am constantly
      seeking new challenges and opportunities to grow my skills. In addition to
      my professional experience, I am committed to giving back to the community
      and regularly volunteer my time to mentor new graduates and share my
      knowledge through my meetup group, React-dojo. I am driven by a desire
      to make a positive impact and help others achieve their goals.
    </div>
  );
};
export const ExperienceComponent = () => {
  return (
    <ul className="py-2 list-item list-inside text-white">
      <li>- Tech Lead / Front-End : Cuddly</li>
      <li>- Senior Software Developer: EBP Digital Technologies</li>
      <li>- Senior Frontend Developer: BuildDirect</li>
      <li>- Frontend Developer: BuildDirect</li>
      <li>- Full Stack Developer: FIND Innovation Labs Inc.</li>
      <li>- Lead Developer: Convergence Concepts Inc</li>
    </ul>
  );
};
export const SkillsComponent = () => {
  return (
    <div>
      <ul className="text-white list-inside">
        <li>Languages: JavaScript, TypeScript, HTML5, CSS3, Ruby</li>
        <li>
          Frameworks and Libs: Node, ExpressJs, Apollo Server, React, Gatsby,
          NextJS, Jekyll, ROR, WordPress
        </li>
        <li>
          UI Frameworks: Tailwind, Antd, Semantic UI, Material UI, Bootstrap
        </li>
        <li>Databases: MongoDB, Firebase, Firestore, PostgreSQL, Supabase</li>
      </ul>
    </div>
  );
};
export default HomeComponent;
