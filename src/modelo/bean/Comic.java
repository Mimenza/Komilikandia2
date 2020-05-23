package modelo.bean;

import java.util.Date;

public class Comic {
	/**
	 * Comic bere atributoekin eta get-set
	 */
	private int id;
	private String nombre;
	private String titulo;
	private int num;
	private Date fecha_publicacion;
	private String imagen;
	private int num_likes;

	private Genero genero;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public Date getFecha_publicacion() {
		return fecha_publicacion;
	}

	public void setFecha_publicacion(Date fecha_publicacion) {
		this.fecha_publicacion = fecha_publicacion;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public int getNum_likes() {
		return num_likes;
	}

	public void setNum_likes(int num_likes) {
		this.num_likes = num_likes;
	}

	public Genero getGenero() {
		return genero;
	}

	
	public void setGeneroId(int id) {
		this.id = id;
	}
	
	public void setGenero(Genero genero) {
		this.genero = genero;
	}

	@Override
	public String toString() {
		return "Comic [id=" + id + ", nombre=" + nombre + ", titulo=" + titulo + ", num=" + num + ", fecha_publicacion="
				+ fecha_publicacion + ", imagen=" + imagen + ", num_likes=" + num_likes + ", genero=" + genero + "]";

	}
}
