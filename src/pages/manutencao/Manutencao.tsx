import React from 'react';
import { DNA } from 'react-loader-spinner';

const Manutencao = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Estamos processando sua compra </h1>
      <p className="text-lg text-gray-600 mb-8"></p>

          <DNA
            visible={true}
            height='200'
            width='200'
            ariaLabel='dna-loading'
            wrapperStyle={{}}
            wrapperClass='dna-wrapper mx-auto'
          />

    </div>
  );
};

export default Manutencao;