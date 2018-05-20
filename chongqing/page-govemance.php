<?php
/*
Template Name: govemance
*/
?>
  
<?php get_header(); ?>
<style type="text/css">
.content{
	height: 580px;

	}
	.content1
{
	width: 100%;
	height: 600px;
	background: url(<?php bloginfo('template_directory'); ?>/picture/001.png) no-repeat;
	background-size: 100%;
}
.content11{background:#009a44 ;width: 1000px; height: 150px;margin: 0px auto;}
</style>
<div class="content">
		<div class="content_header" style="margin-top: 10px;">
			<center><h1>联系我们</h1></center>
			<center><h3>CONTENT US</h3></center>
		</div>
		<div class="content1" style="height: 600px;">
			<div class="content11">
				<div class="img1" style="width: 33.33%;height: 100px;float: left;margin-top: 25px;">
					<center><img src="<?php bloginfo('template_directory'); ?>/picture/pic42.png">
					<p style="color: #fff;font-size: 16px;margin-top: 10px;">重庆市巴南区鱼洞<br>鱼轻路50号附14号</p></center>
				</div>

				<div class="img1" style="width: 33.33%;height: 100px;float: left;margin-top: 25px;">
					<center><img src="<?php bloginfo('template_directory'); ?>/picture/pic43.png">
					<p style="color: #fff;font-size: 20px;margin-top: 15px;">18523951388</p></center>
				</div>
				<div class="img1" style="width: 33.33%;height: 100px;float: left;margin-top: 25px;">
					<center><img src="<?php bloginfo('template_directory'); ?>/picture/ico1.png" style="width: 35px;height: 35px;color: white;">
					<p style="color: #fff;font-size: 20px;margin-top: 10px;">401320</p></center>
				</div>
			</div>
		</div>
	</div>
<?php get_footer(); ?>