function About({ image="https://via.placeholder.com/215", aboutBlog }){
    

return(<aside>
    <img src={image} alt="blog logo"></img>
    <p>{aboutBlog}</p>
</aside>
);

    
}
export default About;