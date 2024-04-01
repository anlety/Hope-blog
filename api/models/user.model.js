import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }, 
  password: {
    type: String,
    required: true,
  },
  profilePicture:{
    type: String,
    default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAMFBMVEXk5ueutLfp6+y4vsCrsbTY29zh4+SyuLvV2NqorrLM0NLHy83Cx8m/xMbc3uDQ09X+TWxUAAADyElEQVR4nO2b3XqkIAxAFRBE+Xn/t13o2Ha0M52QaDK7y7nq196cBoIxhmHodDqdTqfT6XQ6nU6n0zkLpZRNU8GWn6RlHmNzdKMZK2Z0YbbSQgfUMC3a3AQ3jDc6pzeKp5r0uDPcPI2Lb6M5Of/T8DOeOknrFZQN5kEUvzXHdZCOppofLfRe00mv+fp0pe81F0lFpV+FcbNc5RytgzkWyyjmCIyjpCV0rTfLIJI9scWx7kt+S7W0ORbLmd0ytToW2EsO1+7InTzti/1hObFKJkQgK5yOKmACOY4+c+YO5In9CMeniA0ka6lhkTuySGouR5WxjsWSrVBvfCDuJLke4fjVrjBJztjcrnie9cbndsUsLKFUpNUeI48kZbXHkecQsjRJx7IpZ8qWLJIcpRCuSrtj5pBcaZImc0hGWiBZaowu+X9JBqIkS+IQs5vnCMp/geQwEZ84PLUascBgabZQqyCeUk2TJJlecjIllFz9IEzX7wvP1Whp6kMf4NmSBcJx7llOycqED6Rj6/bi85vzqxO+PcDY68W+ehuel+4N5Buj5/3+gDqFuL+KJUwg+VL7Bqb0Ffgk1rzgEp9AW1upfO3yO1Rjhc5UkR9pOof4OvoHWl7JJrGJFvDj0cg51uEqSDAN9wF5ADIsYoL4AODy6xRYHatjq3Ofo6z+RdOMQVrwhpqjf6xpTJTMmAMpjsfBOlPiK78Zd6hhDtp5X1e+6HnjdJjFZxJ/8DF0nNcQYwhLnpJ9O8Mb6h5pmR9UpxLHec55KeSc5ykl+z6uZZnnNWrn3Ge+bBlUfqPDMglvzBK9KYctW56d5OWvcZmFdqgaphI/8+Jx86kqk+splHOxoVKr/4zOfMdmjaF78oj5nbLyPEP8asgPx/OhAXXh+u2ZAiqG955eX3p3Q6UISpSXnvqyr2LKRvw6HyxHd0mjQNmVutA7vD6/iFMLePAdSC2Hz9VMlF7+c81Tt+ar9xgsPp6X54QpvxeYkxJIpYvCeMOf0eqnTHSCOGH6nDbiB7MkTyNH2ndjoCWp6lDXpczeklJ0XHE6Pgbfvbx+P36B7buRZ2taMA614Io0INBuier7E74X4ywRpzr8ut9pls19TKbDZ0+rI3FwF0XrJzPazQE0TQvOevp80/gUF3Fsu57FUPo8Ax5HK6U4GnAohXbkhyR4cNHSxvpoltCZHOKoKU0SelbKpU21hEkSLwUR8cD1Zi3RjgDvqlNHtImAql/qtQGyJOQQkt2SwJtPQgXQN5BWG2oK7URAFxuTFgZ0FUZJA5HsdDr/BH8AZAcxECXQIgoAAAAASUVORK5CYII=",
  },
  
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;