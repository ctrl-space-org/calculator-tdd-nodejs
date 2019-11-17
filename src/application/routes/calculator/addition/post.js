const routes = require('express').Router()

const { calculator } = require('../../../../domain')

/**
 * @swagger
 * definitions:
 *  additionRequest:
 *   description: Números para adição.
 *   properties:
 *     num1:
 *       description: "Número a esquerda da operação."
 *       type: number
 *       example: "14"
 *     num2:
 *       description: "Número a direita da operação."
 *       type: number
 *       example: "32"
 */
/**
 * @swagger
 * /calculator/addition:
 *   post:
 *     summary: Recebe dois números para adiçao.
 *     parameters:
 *        - name: request
 *          description: Requisição para adição
 *          in:  body
 *          required: true
 *          type: string
 *          schema:
 *            $ref: '#/definitions/additionRequest'
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: "Adição realizada com sucesso."
 *       '204':
 *         description: "Adição realizada com sucesso."
 */

routes.post('/', (req, res) => {
  const { num1, num2 } = req.body
  res.json({
    result: calculator.addition(num1, num2)
  })
})

module.exports = {
  routes
}
