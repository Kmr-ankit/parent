import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer xeI3988H2Lr2P-81RdS7p6RDmKaVPUQn1UR3Murw0Ni-3Wx7X-Ovfu8cVAKJo26VctXPmDdWdMe5HGsJt4rLwVigkj43OKZx8VPHLqHrMLphuhOxs_lovyrfDM78YnYx",
  },
});
