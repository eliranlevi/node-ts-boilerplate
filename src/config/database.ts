import Knex from "knex";
import { Model } from "objection";
import config from "../../knexfile";

export default function database() {
  const knex = Knex(config);

  Model.knex(knex);
};
