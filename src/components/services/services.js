import listOfServices from "./services.json";
import "./services.scss"
const Services = () => {
    console.log(process.env.PUBLIC_URL)
  return (
    <div className="ui-services">
      <h1>Services We Offer</h1>
      {listOfServices?.salon_services?.map((categories) => {
        return (
          <div className="categories">
            <h3>{categories?.category}</h3>
            <div className="services-container">

            {categories?.services?.map((services, index) => {
              return (
                <div key={`service${index}`} className="services">
                  <img alt="services" src={`${process.env.PUBLIC_URL}/services/${services?.imageId}`}/>
                  <h4>{services?.name}</h4>
                  <div>{services?.description}</div>
                </div>
              );
            })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
