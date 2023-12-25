import Home from "../views/home";
import Service from "../views/services";
import Portofolio from '../views/portofolio';
import Blog from '../views/blog';
import AboutUs from '../views/aboutUs';
import Career from '../views/career';
import ContactUs from '../views/contactUs';
import IndividualService from "../views/individualService";
import ProjectDetails from "../views/projectDetails";
import SMediaService from '../views/sMediaService';

const routes = [
    {
        components: <Home/>,
        to: '/'
    },
    {
        components: <Service />,
        to: '/services'
    },
    {
        components: <Portofolio />,
        to: '/portofolio'
    },
    {
        components: <Blog />,
        to: '/blog'
    },
    {
        components: <AboutUs />,
        to: '/aboutUs'
    },
    {
        components: <Career />,
        to: '/career'
    },
    {
        components: <ContactUs />,
        to: '/contactUs'
    },
    {
        components: <IndividualService />,
        to: '/individualService'
    },
    {
        components: <ProjectDetails />,
        to: '/projectDetails'
    },
    {
        components: <SMediaService />,
        to: '/sMediaService'
    }
];

export default routes;