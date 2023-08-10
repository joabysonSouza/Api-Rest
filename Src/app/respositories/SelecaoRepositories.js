import { json } from "express";
import conexao from "../database/conexao.js";

class SelecaoRepositories {
  create(selecao) {
    const sql = "INSERT INTO selecoes SET?;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, selecao, (erro, result) => {
        if (erro) return reject("não foi possivel localizar");

        const row = JSON.parse(JSON.stringify(result));

        return resolve(row);
      });
    });
  }

  findAll() {
    const sql = "SELECT * FROM selecoes;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, (erro, result) => {
        if (erro) return reject("não foi possivel localizar");

        const row = JSON.parse(JSON.stringify(result));

        return resolve(row);
      });
    });
  }

  findBYId(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?";

    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, result) => {
        if (erro) return reject("id não localizado");

        const row = JSON.parse(JSON.stringify(result));

        return resolve(row);
      });
    });
  }

  update(selecao, id) {
    const sql = "UPDATE selecoes SET ? WHERE id=?";
    return new Promise((resolve, reject) => {
      conexao.query(sql, [selecao, id], (erro, result) => {
        if (erro) return reject("id não localizado");

        const row = JSON.parse(JSON.stringify(result));

        return resolve(row);
      });
    });
  }

  delete(id) {
    const sql = "DELETE FROM selecoes WHERE id=?";
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, result) => {
        if (erro) return reject("id não posivel apagar");

        const row = JSON.parse(JSON.stringify(result));

        return resolve(row);
      });
    });
  }
}

export default new SelecaoRepositories();
