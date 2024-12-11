import courseImage1 from "../assets/images/img1.jpg";
import courseImage2 from "../assets/images/img2.jpg";
import courseImage3 from "../assets/images/img3.jpg";
import courseImage4 from "../assets/images/img4.jpg";

function Recommendation() {
  return (
    <>
      <div className="recommendation">
        <h1 className="recommendation__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div className="recommendation__container">
          <div className="course-card">
            <img src={courseImage1} alt="Course Image"></img>
            <h3>2024 Python Data Visualization MasterclassName</h3>
            <p>Col Steele</p>
            <p>3.9 ⭐⭐⭐</p>
            <p>
              449 <del>1999</del>
            </p>
          </div>

          <div className="course-card">
            <img src={courseImage2} alt="Course Image"></img>
            <h3>Web Development Bootcamp 2024</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>
              549 <del>1999</del>
            </p>
          </div>

          <div className="course-card">
            <img src={courseImage3} alt="Course Image"></img>
            <h3>Master UI/UX Designing with Figma</h3>
            <p>Col Steele</p>
            <p>4.8 ⭐⭐⭐⭐</p>
            <p>
              649 <del>1999</del>
            </p>
          </div>

          <div className="course-card">
            <img src={courseImage4} alt="Course Image"></img>
            <h3>Basic to Advance Java course Training</h3>
            <p>Col Steele</p>
            <p>4.8 ⭐⭐⭐⭐</p>
            <p>
              749 <del>1999</del>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recommendation