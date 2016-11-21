<?php
/**
 * The template for displaying search forms in gravit
 *
 * @package gravit
 */
?>
<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label>
		<span class="screen-reader-text"><?php _ex( 'Tìm kiếm:', 'label', 'gravit' ); ?></span>
		<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Gõ một cái gì đó &hellip;', 'placeholder', 'gravit' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" name="s">
	</label>
	<input type="submit" class="search-submit" value="<?php echo esc_attr_x( 'Tìm', 'submit button', 'gravit' ); ?>">
</form>
