import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <div>
    <div className="wrapper">
      <div className="flex items-center justify-center">
        <img src="./images/logo.png" alt="logo" className="w-60" />
      </div>
      <a href="" className="btn-shine mb-80" target="_blank">
        {" "}
        COMING SOON <span className="dot">.</span>
      </a>

      <div className="content mt-20">
        <a
          href="https://www.facebook.com/profile.php?id=61556330501776&mibextid=LQQJ4d"
          className="card"
        >
          <div className="icon">
            <img src="./images/fb.svg" className="w-10" />
          </div>
          <p className="title">FACEBOOK GROUP</p>
        </a>

        <a
          href="https://www.facebook.com/groups/196472841954174/?ref=share&mibextid=NSMWBT&paipv=0&eav=AfbH8tBtqs5g1SK5ioLELC4jX8V34xgYjNRncavvJKoxzvqUv08aE86xd0MfD6nZilM&_rdr"
          className="card"
        >
          <div className="icon">
            <img src="./images/car.svg" className="w-10" />
          </div>
          <p className="title">Car Group</p>
          {/* <p className="text">Click to see or edit your profile page.</p> */}
        </a>

        <a
          href="https://www.facebook.com/groups/269013093769944/?ref=share&mibextid=NSMWBT&paipv=0&eav=AfbVa8YZ9llOkd7J2qtWw8pSv2NkZk8tDB0Lno-nhuFNk7zt5aF50FdotahvuCPS6RI&_rdr"
          className="card"
        >
          <div className="icon">
            <img src="./images/bike.svg" className="w-10" />
          </div>
          <p className="title">Bike Group</p>
          {/* <p className="text">Check all your favourites in one place.</p> */}
        </a>

        <a
          href="https://www.facebook.com/groups/278189528062200/?ref=share&mibextid=NSMWBT&paipv=0&eav=AfYTpxfyjoWmrFyqY6olwbVufvgxurU42WxOBrXTe0RUUqzaxQJ16Lto6Rx4L5_98r0&_rdr"
          className="card"
        >
          <div className="icon">
            <img src="./images/three.webp" className="w-10" />
          </div>
          <p className="title">ThreeWheeler Group</p>
          {/* <p className="text">Add or change your contacts and links.</p> */}
        </a>
      </div>
    </div>
  </div>
);

export default IndexPage;
