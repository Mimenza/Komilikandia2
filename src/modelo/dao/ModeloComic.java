package modelo.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import modelo.Conector;
import modelo.bean.Comic;
import modelo.bean.Genero;

public class ModeloComic extends Conector{
	
	public ArrayList<Comic> getAll(){
		ArrayList<Comic> comics = new ArrayList<Comic>();
		
		try {
			PreparedStatement pst = super.conexion.prepareStatement("select * from comics inner join generos on generos.id=comics.genero_id");
			ResultSet rs = pst.executeQuery();
			
			while(rs.next()) {
				Comic comic = new Comic();
				
				comic.setId(rs.getInt("id"));
				comic.setNombre(rs.getString("nombre"));
				comic.setTitulo(rs.getString("titulo"));
				comic.setNum(rs.getInt("num"));
				comic.setFecha_publicacion(rs.getDate("fecha_publicacion"));
				comic.setImagen(rs.getString("imagen"));
				comic.setNum_likes(rs.getInt("num_likes"));
				
				
				Genero genero = new Genero();
				
				genero.setId(rs.getInt("generos.id"));
				genero.setNombre(rs.getString("generos.nombre"));
				
				comic.setGenero(genero);
				
				comics.add(comic);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return comics;
	}
	
	public Comic get(int idComic) {
		try {
			PreparedStatement pst = super.conexion.prepareStatement("select * from comics inner join generos on generos.id=comics.genero_id where comics.id=?");
			pst.setInt(1, idComic);
			ResultSet rs = pst.executeQuery();
			
			if(rs.next()) {
				Comic comic = new Comic();
				
				comic.setId(rs.getInt("comics.id"));
				comic.setNombre(rs.getString("comics.nombre"));
				comic.setTitulo(rs.getString("titulo"));
				comic.setNum(rs.getInt("num"));
				comic.setFecha_publicacion(rs.getDate("fecha_publicacion"));
				comic.setImagen(rs.getString("imagen"));
				comic.setNum_likes(rs.getInt("num_likes"));
				
				
				Genero genero = new Genero();
				
				genero.setId(rs.getInt("generos.id"));
				genero.setNombre(rs.getString("generos.nombre"));
				
				comic.setGenero(genero);
				
				return comic;
			}
			
		} catch (SQLException e) {

			e.printStackTrace();
		}
		return null;
		
	}
}