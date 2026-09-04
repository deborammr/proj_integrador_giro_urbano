package sptech.school.proj_transporte_urbano;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/bicicletas")
public class BicicletaController {

    private final JdbcTemplate template;

    //------------------------------CONSTRUTOR

    public BicicletaController(JdbcTemplate template) {
        this.template = template;
    }

    //------------------------------METODOS

    //------------------------------1 - LISTA (GET)

    @GetMapping
    public ResponseEntity<List<Bicicleta>> listar() {

        String sql = "SELECT * FROM bicicleta";

        List<Bicicleta> resultado = template.query(sql, new BeanPropertyRowMapper<>(Bicicleta.class));

        if (resultado.isEmpty()) {
            return ResponseEntity.status(200).body(resultado);
        }

        return ResponseEntity.status(200).body(resultado);
    }

    //------------------------------1 - CADASTRO (POST)
    @PostMapping
    public ResponseEntity<Bicicleta> cadastrar(@RequestBody Bicicleta bicicletaParaCadastro) {

        if (!isBicicletaValida(bicicletaParaCadastro)) {
            return ResponseEntity.status(400).build();
        }

        String sql = """
            INSERT INTO bicicleta
            (codigoPatrimonio, modelo, status, quilometragem, localizacaoAtual)
            VALUES (?, ?, ?, ?, ?)
            """;

        KeyHolder keyHolder = new GeneratedKeyHolder();

        template.update(connection -> {
            PreparedStatement statement = connection.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS
            );

            statement.setString(1, bicicletaParaCadastro.getCodigoPatrimonio());
            statement.setString(2, bicicletaParaCadastro.getModelo());
            statement.setString(3, bicicletaParaCadastro.getStatus());
            statement.setDouble(4, bicicletaParaCadastro.getQuilometragem());
            statement.setString(5, bicicletaParaCadastro.getLocalizacaoAtual());

            return statement;
        }, keyHolder);

        if (keyHolder.getKey() != null) {
            bicicletaParaCadastro.setId(keyHolder.getKey().intValue());
        }

        return ResponseEntity.status(201).body(bicicletaParaCadastro);
    }


    //------------------------------VALIDAÇÃO
    private boolean isBicicletaValida(Bicicleta bicicleta) {
        if (bicicleta == null) return false;

        return bicicleta.getCodigoPatrimonio() != null &&
                !bicicleta.getCodigoPatrimonio().isBlank() &&

                bicicleta.getModelo() != null &&
                !bicicleta.getModelo().isBlank() &&
                isModeloValido(bicicleta.getModelo()) &&

                bicicleta.getStatus() != null &&
                !bicicleta.getStatus().isBlank() &&
                isStatusValido(bicicleta.getStatus()) &&

                bicicleta.getQuilometragem() != null &&
                bicicleta.getQuilometragem() >= 0 &&

                bicicleta.getLocalizacaoAtual() != null &&
                !bicicleta.getLocalizacaoAtual().isBlank() &&
                isLocalizacaoValida(bicicleta.getLocalizacaoAtual());
    }

    private boolean isModeloValido(String modelo) {
        return modelo.equals("Elétrica") ||
                modelo.equals("Comum") ||
                modelo.equals("Infantil");
    }

    private boolean isStatusValido(String status) {
        return status.equals("Disponível") ||
                status.equals("Em Uso") ||
                status.equals("Manutenção");
    }

    private boolean isLocalizacaoValida(String localizacao) {
        return localizacao.equals("Rua Haddock Lobo - Jardins") ||
                localizacao.equals("Rua Haddock Lobo - Centro") ||
                localizacao.equals("Rua Augusta - Jardins") ||
                localizacao.equals("Rua Augusta - Centro") ||
                localizacao.equals("Oficina");
    }


}