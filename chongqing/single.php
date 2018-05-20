<?php get_header(); ?>
<style type="text/css">
    .center{width: 1020px;/* height: 400px; */margin: 0px auto;position: relative;}
.center_left{width: 200px;/* height: 250px; */float: left; border: 1px solid #07a94e;    margin-top: 20px;}
.center_right{float: right;margin-top: 20px;}
.text1{margin-left: 12px;}
.center_left_content1{background: #07a94e;
    width: 100%;
    height: 44px;}
.center{*zoom: 1;}
.center:after{content: ".";display: block;height: 0;visibility: hidden;clear: both;}
.center_left_content2{*zoom: 1;}
.center_left_content2:after{content: ".";display: block;height: 0;visibility: hidden;clear: both;}
.center_left_content2{width: 200px;/* height: 208px; */}
.content2_text{width: 200px;}
.center_right{width: 700px;/* height: 416px; */margin-right: 58px;}
.content{width: 100%;}
.content2_text ul li{list-style: none;}

</style>
<div class="content">
    <div class="center">
    <div class="center_left">
        <div class="center_left_content1">
            <?php the_category(); ?>
        </div>
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <div class="center_left_content2">
            <div class="content2_text">
                <?php the_title(); ?>
            </div>
        </div>
    </div>
    <div class="center_right">
        <div class="center_right_content">
            <div>
                <?php if(function_exists('cmp_breadcrumbs')) cmp_breadcrumbs();?>
            </div>
            <center>
            <div>
                <?php the_title(); ?><?php the_time('Y-m-j'); ?>
            </div>
            </center>
            <hr style="height:1px;border:none;border-top:1px dashed #8d5736;" />
                <div class="wenzhangneirong">
                    <?php the_content(); ?>
                    <?php link_pages('<p><strong>Pages:</strong>', '</p>', 'number'); ?>
                </div>
            </div>
        </div>
    </div>
<?php endwhile; else: ?>
    <div class="post-no-artical">
        <div class="post-header">
            <h2 class="post-title">Sorry :(</h2>
            <div class="post-info">there are no news here</div>
        </div>
    </div>
</div>
<?php endif; ?>
<?php get_footer(); ?>

