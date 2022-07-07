import express, { Express, Request, Response } from "express";
import { CreateRouteUseCase } from "../../../application/create-route.use-case";
import { ListAllRoutesUseCase } from "../../../application/list-all-routes.use-case";
import { RouteInMemoryRepository } from "../../db/route-in-memory.repository";

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;


const routeRepo = new RouteInMemoryRepository()

app.post("/routes", async (req: Request, res: Response) => {
  const createUseCase = new CreateRouteUseCase(routeRepo)
  const output = await createUseCase.execute(req.body)
  res.status(201).json(output)
})

app.get("/routes", async (req: Request, res: Response) => {
  const listUseCase = new ListAllRoutesUseCase(routeRepo)
  const output = await listUseCase.execute()
  res.status(200).json(output)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})