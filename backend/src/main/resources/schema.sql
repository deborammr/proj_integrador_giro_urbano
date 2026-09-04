CREATE TABLE bicicleta (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           codigoPatrimonio VARCHAR(50) NOT NULL UNIQUE,
                           modelo VARCHAR(100) NOT NULL,
                           status VARCHAR(30) NOT NULL,
                           quilometragem DOUBLE NOT NULL,
                           localizacaoAtual VARCHAR(100) NOT NULL
);
