package modelo.dao;

import java.sql.Date;
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


		
public void addlike(int comicId) {
		
		try {
				PreparedStatement preparedStatement = conexion.prepareStatement("select num_likes from comics where comics.id =?");
				preparedStatement.setInt(1, comicId);
				ResultSet resultSet = preparedStatement.executeQuery();
				
				while (resultSet.next()) {
					
					int likes = resultSet.getInt("num_likes");
					likes = likes +1;
					
					preparedStatement=conexion.prepareStatement("update comics set num_likes = ? where comics.id = ?");
					preparedStatement.setInt(1, likes);
					preparedStatement.setInt(2, comicId);
					preparedStatement.executeUpdate();
					
				}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
	}
	
	

public void delete (int comicId) {
		
		try {
			PreparedStatement preparedStatement = conexion.prepareStatement("delete from comics where id =?");
			preparedStatement.setInt(1, comicId);
			preparedStatement.execute();
			
		} catch (Exception e) {
			// TODO: handle exception
		}
				
	}
	
	

public void insert(Comic comic) {
    try {
        final PreparedStatement pst = super.conexion.prepareStatement("insert into comics (id, nombre, titulo, num, fecha_publicacion, imagen, num_likes, genero_id) values (?,?,?,?,?,?,?,?)");
        pst.setInt(1,comic.getId());
        pst.setString(2,comic.getNombre());
        pst.setString(3,comic.getTitulo());
        pst.setInt(4,comic.getNum());
        pst.setDate(5,(Date) comic.getFecha_publicacion());
        pst.setString(6,comic.getImagen());
        pst.setInt(7,comic.getNum_likes());
        pst.setInt(8,comic.getGenero().getId());
        pst.execute();
    }
    catch (SQLException e) {
        e.printStackTrace();
    }
}



public void update(Comic comic) {
   try {
       final PreparedStatement pst = super.conexion.prepareStatement("update comics set nombre=?, titulo=?, num=?, fecha_publicacion=?, imagen=?, num_likes=?, genero_id=?  where id=?");
       pst.setInt(1,comic.getId());
       pst.setString(2,comic.getNombre());
       pst.setString(3,comic.getTitulo());
       pst.setInt(4,comic.getNum());
       pst.setDate(5,(Date) comic.getFecha_publicacion());
       pst.setString(6,comic.getImagen());
       pst.setInt(7,comic.getNum_likes());
       pst.setInt(8,comic.getGenero().getId());
       pst.executeUpdate();
    }
    catch (SQLException e) {
        e.printStackTrace();
   }
}
}
