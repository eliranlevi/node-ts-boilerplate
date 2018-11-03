import express from "express";

const middlewares = [
  express.json(),
  express.urlencoded({ extended: true }),
];

export default middlewares;
