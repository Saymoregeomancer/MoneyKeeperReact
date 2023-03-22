<?php if ( WC()->cart->needs_shipping() && WC()->cart->show_shipping() ) : ?>

<?php do_action( 'woocommerce_review_order_before_shipping' ); ?>

<?php wc_cart_totals_shipping_html(); ?>

<?php do_action( 'woocommerce_review_order_after_shipping' ); ?>

<?php endif; ?>
<tr class="order-total">
			<th><?php esc_html_e( 'Total', 'woocommerce' ); ?></th>
			<td><?php wc_cart_totals_order_total_html(); ?></td>
		</tr>


        <!-- /home/kf470119/pogribok.store/www/wp-content/plugins/woocommerce/templates/checkout/review-order.php-->

        