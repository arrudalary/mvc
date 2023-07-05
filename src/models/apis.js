import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
        lugar: { type: String, required: true },
        estado: { type: String, required: true },
        comoChegar: { type: String, required: true },
        melhorÉpocaParaVisitar: { type: String, required: true },
        distância: { type: Number, required: true }
    }
)
const apis = mongoose.model1('apis', apiSchema);
module.exports = apis;