import SelecaoRepositories from "../respositories/SelecaoRepositories.js";

class Selecaocontroller {
  async index(req, res) {
    // res.status(200).send(selecoes)
    const row = await SelecaoRepositories.findAll();
    res.json(row);
  }

  async show(req, res) {
    const id = req.params.id;
    const row = await SelecaoRepositories.findBYId(id);
    res.json(row);
  }

  async store(req, res) {
    const selecao = req.body;
    const row = await SelecaoRepositories.create(selecao);
    res.json(row);
  }

  async update(req, res) {
    const selecao = req.body;
    const id = req.params.id;
    const row = await SelecaoRepositories.update(selecao, id);
    res.json(row);
  }

  async delete(req, res) {
    const id = req.params.id;
    const row = await SelecaoRepositories.delete(id);
    res.json(row);
  }
}

//padrao singleton
export default new Selecaocontroller();
