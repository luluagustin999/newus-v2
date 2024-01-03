import React from "react";
import styles from './BlogHome.module.css';
import logo1 from '/Users/User/newus-v2/src/assets/blog/bloghome.svg';
// import logo2 from '/Users/User/newus-v2/src/assets/blog/bloghome.svg';
// import logo3 from '/Users/User/newus-v2/src/assets/blog/bloghome.svg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const data = [
    {
        blogImage: '',
        title: '',
        desc:'',
        slug:''
    },
    {
        blogImage: '',
        title: '',
        desc:''
    },
    {
        blogImage: '',
        title: '',
        desc:''
    },
    {
        blogImage: '',
        title: '',
        desc:''
    },
    {
        blogImage: '',
        title: '',
        desc:''
    },
    {
        blogImage: '',
        title: '',
        desc:''
    }
]

const BlogHome = () =>{
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2, // optional, default to 1. -35
        },
        tablet: {
            breakpoint: { max: 1024, min: 560 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 560, min: 0 },
            items: 0.6,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return(
        <div style={{backgroundColor: '#FFFFFF', marginTop:'-80px'}} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
            <p className={styles.heading}>Blog</p>
            <div style={{display:'flex', justifyContent:'center'}}>
            <p className={styles.subheading}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est </p>
            </div>

            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={3000}
                keyBoardControl={false}
                customTransition="transform 400ms ease-in-out"
                transitionDuration={500}
                containerClass={`carousel-container`}
                arrows={false}
                dotListClass={`custom-dot-list-style`}
                itemClass={`carousel-item-padding-40-px d-flex align-items-stretch mt-3 px-2`}
                // focusOnSelect={true}
                // partialVisbile={true}
                centerMode={false}
                >
                    {data.map((v, i) => {
                        return (
                            <div className="col-md-4">
                            <div className={styles.box}>
                                <img src={logo1} alt=""/>
                                <p className={styles.head}>Lorem Ipsum Dolor Amet Amit Amon Amin</p>
                                <p className={styles.content}>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel ?</p>
                            </div>
                        </div>
                        )
                    })}
                </Carousel>
                <div style={{textAlign:'center'}}>
                    <button className={`btn custom_btn ${styles.btn}`}>See More Articles</button>
                </div>
            </div>
        </div>
    )
}
export default BlogHome;