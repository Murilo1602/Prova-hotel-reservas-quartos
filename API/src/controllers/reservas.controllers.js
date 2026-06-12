const prisma = require('../data/prisma')

const listar = async (req, res) => {
  const reservas = await prisma.reserva.findMany({
    include: {
      quarto: true
    }
  })
  res.json(reservas)
}

const listarPorQuarto = async (req, res) => {
  const { id } = req.params
  const reservas = await prisma.reserva.findMany({
    where: { quarto_id: Number(id) },
    include: {
      quarto: true
    }
  })
  res.json(reservas)
}

const cadastrar = async (req, res) => {
  try {
    const { hospede, data_entrada, data_saida, quarto_id } = req.body
    const reserva = await prisma.reserva.create({
      data: {
        hospede,
        data_entrada: new Date(data_entrada),
        data_saida: new Date(data_saida),
        quarto_id: Number(quarto_id)
      },
      include: {
        quarto: true
      }
    });
    res.status(201).json(reserva)
  } catch (error) {
    res.status(400).json({ erro: error.message })
  }
}

const excluir = async (req, res) => {
  const { id } = req.params
  await prisma.reserva.delete({
    where: { id: Number(id) }
  })
  res.json({ mensagem: 'Reserva excluída com sucesso' })
}

module.exports = { 
    listar,
    listarPorQuarto,
    cadastrar, 
    excluir 
} 