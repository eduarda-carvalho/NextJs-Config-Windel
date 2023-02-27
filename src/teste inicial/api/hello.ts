import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { onlyNumbers } from '../functions/onlyNumbers';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const cnpj = req?.body?.cnpj;
  try {
    const response = await axios.get(
      `https://receitaws.com.br/v1/cnpj/${cnpj}/days/30`,
      {
        headers: { Authorization: `Bearer ${process.env.TOKEN_RECEITA_WS}` },
      }
    );

    const cep = onlyNumbers(response.data.cep);
    const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    return res.status(200).json({
      resCodIBGE: resp.data,
    });
  } catch (err) {
    const error = err as AxiosError;
    console.log(error, 'error CNPJ');
    return error;
  }
}
