import { CareerRoadmap, EduRoadmap } from '@components/Roadmap/Roadmap';
import { educationList } from '@src/mocks/data/education';
import { careerList } from '@src/mocks/data/career';

const Profile = () => {
    // const education = educationList[0];
    // const career = careerList;

    return (
        <div>
            Profile
            {/*<div>*/}
            {/*    {education && (*/}
            {/*        <EduRoadmap*/}
            {/*            schoolName={education.schoolName}*/}
            {/*            startDate={education.startDate}*/}
            {/*            endDate={education.endDate}*/}
            {/*            isAttending={false}*/}
            {/*            major={'수학'}*/}
            {/*            degree={'degree'}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*</div>*/}
            {/*<div>{career && career.map((item) => <CareerRoadmap key={item.careerId} {...item} />)}</div>*/}
        </div>
    );
};

export default Profile;
