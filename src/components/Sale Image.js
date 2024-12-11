import saleImage from "../assets/images/sale-image.jpg";

function SaleImage() {
    return (
        <>
            <div className="sale-image">
                <img src={saleImage} alt="Sale Image"></img>
                <div className="sale-image__sale-card">
                    <h2>Udemy Flash Sale! 24 hours to save.</h2>
                    <p>Get the top Courses for just Rs. 449. Just one day to save but a lifetime to learn.</p>
                </div>
            </div>
        </>
    )
}

export default SaleImage