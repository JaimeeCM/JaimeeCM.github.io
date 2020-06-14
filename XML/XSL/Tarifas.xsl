<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="tarifas">
  <html>
  
    <head>
    <link rel="stylesheet" type="text/css" href="../../CSS/EstiloProyecto.css" />
    </head>
    
    <body>
    
    <table>
    <tr>
      <td colspan="3">Tarifas</td>
    </tr>
    
    <tr>
      <td>Tipo</td>
      <td>Duracion</td>
      <td>Informacion</td>
      <td>Activacion</td>
      <td>Precio</td>
    </tr>
    
    
    <xsl:apply-templates select="tarifa"/>
    </table>
    </body>
    
  </html>
  </xsl:template>

<xsl:template match="tarifa">
    <tr>
      <td><xsl:value-of select="tipo"/></td>
      <td><xsl:value-of select="duracion"/></td>
      <td><xsl:value-of select="informacion"/></td>
      <td><xsl:value-of select="activacion"/></td>
      <td><xsl:value-of select="precio"/></td>
    </tr>
</xsl:template>
  
</xsl:stylesheet>