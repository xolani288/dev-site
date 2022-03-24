import React from "react";

const Page1 = () => {
  return (
    <>
      <div
        style={{
          height: "53vh",
          width: "100%",
          backgroundImage: `url(./headerbanner-top.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: 100,
        }}
      ></div>

      <div
        style={{ height: "50vh", display: "flex", justifyContent: "center" }}
      >
        <div style={{ height: "100%", width: "25%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              paddingTop: 40,
              fontSize: 21,
            }}
          >
            <h2>Book an Eye Test</h2>
            Our experienced optometrists and optical staff are always happy to
            see you at Spec-Savers.
            <br></br>
            <br></br>
            <br></br>
            <button
              style={{
                height: 45,
                width: 170,
                borderRadius: "5px",
                background: "#0071C7",
                color: "white",
                fontSize: "15px",
              }}
            >
              Book Now
            </button>
          </div>
        </div>
        <div style={{ height: "100%", width: "25%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              paddingTop: 35,
              fontSize: 21,
              paddingLeft: 27,
            }}
          >
            <h2>Find a Store</h2>
            Visit a store to discuss your eye care needs, try on our collection
            of spectacles and sunglasses, or have an eye test.
            <br></br>
            <br></br>
            <button
              style={{
                height: 45,
                width: 170,
                borderRadius: "5px",
                background: "#00A650",
                color: "white",
                fontSize: "15px",
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <button
        style={{
          height: 50,
          width: 120,
          position: "fixed",
          bottom: 20,
          right: 20,
          borderRadius: "25px",
          background: "#00A650",
          color: "white",
        }}
      >
        Start Chat
      </button>

      <div
        style={{
          height: "50vh",
          width: "100%",
          backgroundImage: `url(./sub-banner.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: 100,
        }}
      ></div>

      <div
        style={{
          height: "80vh",
          width: "100%",
          background: "#f8fafa",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Shop Online</h1>
        <div
          style={{
            height: "35vh",
            width: "100%",
            // border: "solid 2px #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              height: "60%",
              width: "23%",
              backgroundImage: `url(./shop-online-spectacles-378x179.png)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>

          <div
            style={{
              height: "60%",
              width: "23%",
              backgroundImage: `url(./glass.png)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>

          <div
            style={{
              height: "60%",
              width: "23%",
              backgroundImage: `url(./shop-online-contacts-378x179.png)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>

          <div
            style={{
              height: "60%",
              width: "23%",
              backgroundImage: `url(./shop-online-giftcards-378x179.png)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
        </div>

        <div
          style={{
            height: "5vh",
            width: "100%",
            // border: "solid 2px #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
            // border: "2px solid red",
          }}
        >
          <div
            style={{
              height: "60%",
              width: "23%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              style={{ 
                diplay: "flex", 
                justifyContent: "center",
                width: "150px",
                height: "40px", 
                position: "relative",
                bottom: "50px",
                zIndex: 0,
              }}
            ></button>
          </div>
          <div
            style={{
              height: "60%",
              width: "23%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                diplay: "flex",
                justifycontent: "center",
                alignItems: "center",
                width: "150px",
                height: "40px", 
                position: "relative",
                bottom: "50px"
              }}
            ></button>
          </div>
          <div
            style={{
              height: "60%",
              width: "23%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button 
              style={{ 
              diplay: "flex", 
              justifySelf: "center", 
              width: "150px",
              height: "40px", 
              position: "relative",
              bottom: "50px"
              }}
              >

            </button>
          </div>
          <div
            style={{
              height: "60%",
              width: "23%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
             style={{ 
                 diplay: "flex", 
                 justifySelf: "center",
                 width: "150px",
                 height: "40px", 
                 position: "relative",
                 bottom: "50px"
                 }}
                 >
                   show more
                 </button>
          </div>
        </div>
      </div>

      <h1 style={{
        textAlign: "center",
        marginTop: 80,
      }}>Exclusive Brands</h1>
        <div
          style={{
            height: "50vh",
            width: "100%",
            border: "solid 2px #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 180px"
          }}
        >

        <div  style={{
            height: "100%",
            width: "49%",
            border: "solid 2px red",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundImage: `url(./banner-home-de-luca.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
      
        </div>
        <div  style={{
            height: "100%",
            width: "49%",
            border: "solid 2px red",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundImage: `url(./home-tryon-600x568.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
      
        </div>

        </div>
          

      <div
        style={{
          height: "45vh",
          width: "100%",
          backgroundImage: `url(./banner-middle-account-1920x744.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: 50,
        }}
      ></div>

<div style={{
            height: "35vh",
            width: "100%",
            border: "solid 2px #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "50px",
            padding: "0 120px"
          }}
        >
          <div
            style={{
              height: "50%",
              width: "23%",
              backgroundImage: `url(./payment_icon.svg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
             
            }}
          ></div>

          <div
            style={{
              height: "50%",
              width: "23%",
              backgroundImage: `url(./tag_icon.svg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>

          <div
            style={{
              height: "50%",
              width: "23%",
              backgroundImage: `url(./heart_icon.svg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>

          
        </div>
    </>
  );
};

export default Page1;
