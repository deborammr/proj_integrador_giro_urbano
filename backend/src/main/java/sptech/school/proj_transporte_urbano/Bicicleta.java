package sptech.school.proj_transporte_urbano;

public class Bicicleta {

    private Integer id;
    private String codigoPatrimonio;
    private String modelo;
    private String status;
    private Double quilometragem;
    private String localizacaoAtual;


    //CONSTRUTOR
    public Bicicleta() {
    }

    public Bicicleta(Integer id, String codigoPatrimonio, String modelo, String status, Double quilometragem, String localizacaoAtual) {
        this.id = id;
        this.codigoPatrimonio = codigoPatrimonio;
        this.modelo = modelo;
        this.status = status;
        this.quilometragem = quilometragem;
        this.localizacaoAtual = localizacaoAtual;
    }

    //GS
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodigoPatrimonio() {
        return codigoPatrimonio;
    }

    public void setCodigoPatrimonio(String codigoPatrimonio) {
        this.codigoPatrimonio = codigoPatrimonio;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Double getQuilometragem() {
        return quilometragem;
    }

    public void setQuilometragem(Double quilometragem) {
        this.quilometragem = quilometragem;
    }

    public String getLocalizacaoAtual() {
        return localizacaoAtual;
    }

    public void setLocalizacaoAtual(String localizacaoAtual) {
        this.localizacaoAtual = localizacaoAtual;
    }
}
