import Vue from "vue";
import Cloudinary from "cloudinary-vue";

export default ({ $config: { cloudinaryId } }) => {
  Vue.use(Cloudinary, {
    configuration: {
      cloudName: cloudinaryId,
    },
  });
};
