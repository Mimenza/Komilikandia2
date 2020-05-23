package modelo.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import modelo.Conector;
import modelo.bean.Genero;

/**
 * 
 * @author byend
 *
 */

public class ModeloGenero extends Conector{
	/**
	 * 
	 * @return
	 */
	
	public ArrayList<Genero> selectAll(){
		
		/**
		 *  generos arraylist sortzen du eta kontzulta bat egiten du , generos guztiak lortzeko
		 *  ondoren generoari set egiten dio datuekin eta arrylistera gehitzen da 
		 */
		ArrayList<Genero> generos=new ArrayList<Genero>();
		
		try {
			
			Statement st=super.conexion.createStatement();
			ResultSet rs=st.executeQuery("select * from generos");
			
			while(rs.next()) {
				
				Genero genero=new Genero();
				
				genero.setId(rs.getInt("id"));
				genero.setNombre(rs.getString("nombre"));
				
				generos.add(genero);
				
			}
			
			return generos;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return generos;
		
	}

}