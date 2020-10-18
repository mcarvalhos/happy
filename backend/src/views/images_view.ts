import Image from "../models/Image";

export default {
    render(image: Image) {
        return {
            id: image.id,
            //url: `http://localhost:3333/uploads/${image.path}`,  //Rodar localmente no computado
            url: `http://192.168.15.6:3333/uploads/${image.path}`, //Rodar no celular
        };
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};