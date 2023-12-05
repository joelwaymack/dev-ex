import express from 'express';
import { getOrders, getOrderById, getOrderSummary, deleteOrder } from '../data/Data.js';

const router = express.Router();

router.get('/', async (request, response) => {
    response.json(await getOrders());
});

router.get('/summary', async (request, response) => {
    response.json(await getOrderSummary());
});

router.get('/:id', async (request, response) => {
    response.json(await getOrderById(request.params.id));
});

// Add a route to delete an order that returns a 404 if the order doesn't exist and a 200 if it is successfully deleted.
router.delete('/:id', async (request, response) => {
    const result = await deleteOrder(request.params.id);
    if (result) {
        response.sendStatus(200);
    } else {
        response.sendStatus(404);
    }
});

export default router;