import MeLiApi from '../../../services/meli-api.js';

export async function searchItems(req, res) {

    const {q} = req.query;

    res.json(await MeLiApi.search(q));

}


export async function itemDetails(req, res) {

    const {id} = req.params;

    res.json(await MeLiApi.details(id));

}