<?php
/**
 * Template Name: Модули системы
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package isupb
 */

get_header();
?>


<?php if (function_exists('kama_breadcrumbs')) {
    kama_breadcrumbs('');
} ?>


<?php $q = new WP_Query(array(
    'post_type' => 'moduli-sistemi',
    'posts_per_page' => -1,
    'order' => 'ASC',
)); ?>
<?php if ($q->have_posts()) : ?>

    <section class="wrapper">
        <h1 class="title modules__title"><?php the_field('moduli_sistemy_-_zagolovok_h1'); ?></h1>
        <h2 class="modules__subtitle"><?php the_field('moduli_sistemy_-_opisanie'); ?></h2>
        <div class="modules">

<!--            --><?php //while ($q->have_posts()) : $q->the_post(); ?>
<!---->
<!--                <div class="module module-big">-->
<!--                    <a href="--><?php //the_permalink(); ?><!--">-->
<!--                        <div class="module__img module__img-big">-->
<!--                            --><?php //the_post_thumbnail(array(140, 140)); ?>
<!--                        </div>-->
<!--                    </a>-->
<!--                    <div class="module__text"><a href="--><?php //the_permalink(); ?><!--">--><?php //the_title(); ?><!--</a></div>-->
<!--                </div>-->
<!---->
<!--            --><?php //endwhile;
//            wp_reset_postdata();
//            ?>


            <?php

            $post_objects = get_field('spisok_modulej');

            if ($post_objects): ?>
                <?php foreach ($post_objects as $post): // Переменная должна быть названа обязательно $post (IMPORTANT) ?>
                    <?php setup_postdata($post); ?>

                    <div class="module module-big">
                        <a href="<?php the_permalink(); ?>">
                            <div class="module__img module__img-big">
                                <?php the_post_thumbnail(array(140, 140)); ?>
                            </div>
                        </a>
                        <div class="module__text"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></div>
                    </div>

                <?php endforeach; ?>

                <?php wp_reset_postdata(); // ВАЖНО - сбросьте значение $post object чтобы избежать ошибок в дальнейшем коде ?>
            <?php endif;

            ?>


        </div>
    </section><!-- !wrapper -->

<?php endif; ?>
<section class="about">
        <div class="about-text">
            <h2 class="about-text__title">
                О системе
            </h2>
            <div class="text-img__subtitle">
                Интегрированная Система Управления Производственной Безопасностью
            </div>
            <div class="about-text__text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>

        </div>
        <div class="about__content">
            <div class="video">
                <a class="video__link" href="https://youtu.be/4du-kSr1oVE">
                    <picture>
                        <source srcset="https://i.ytimg.com/vi_webp/4du-kSr1oVE/hqdefault.webp" type="image/webp">
                        <img class="video__media" src="https://i.ytimg.com/vi/4du-kSr1oVE/hqdefault.jpg" alt="Исупб">
                    </picture>
                </a>
                <button class="video__button" aria-label="Запустить видео">
                    <svg width="68" height="48" viewBox="0 0 68 48">
                        <path class="video__button-shape"
                              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path>
                        <path class="video__button-icon" d="M 45,24 27,14 27,34"></path>
                    </svg>
                </button>
            </div>
        </div>
    </section> <!-- !about -->
    <section class="benefit">
        <div class="benefit__wrapper">
            <h2 class="benefit__title">
                Выгоды от внедрения ИСУПБ
            </h2>
            <div class="benefit__content">
                <div class="benefit-item">
                    <div class="benefit-item__num">
                        1
                    </div>
                    <div class="benefit-item__img">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/ben1.svg" alt="">
                    </div>
                    <p class="benefit-item__text">
                        Перенос ежедневно увеличивающегося объема данных  производственной безопасности предприятия в цифровую среду
                    </p>
                </div>

                <div class="benefit-item">
                    <div class="benefit-item__num">
                        1
                    </div>
                    <div class="benefit-item__img">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/ben2.svg" alt="">
                    </div>
                    <p class="benefit-item__text">
                        Перенос ежедневно увеличивающегося объема данных  производственной безопасности предприятия в цифровую среду
                    </p>
                </div>

                <div class="benefit-item">
                    <div class="benefit-item__num">
                        1
                    </div>
                    <div class="benefit-item__img">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/ben3.svg" alt="">
                    </div>
                    <p class="benefit-item__text">
                        Перенос ежедневно увеличивающегося объема данных  производственной безопасности предприятия в цифровую среду
                    </p>
                </div>

                <div class="benefit-item">
                    <div class="benefit-item__num">
                        1
                    </div>
                    <div class="benefit-item__img">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/ben4.svg" alt="">
                    </div>
                    <p class="benefit-item__text">
                        Перенос ежедневно увеличивающегося объема данных  производственной безопасности предприятия в цифровую среду
                    </p>
                </div>

                <div class="benefit-item">
                    <div class="benefit-item__num">
                        1
                    </div>
                    <div class="benefit-item__img">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/ben5.svg" alt="">
                    </div>
                    <p class="benefit-item__text">
                        Перенос ежедневно увеличивающегося объема данных  производственной безопасности предприятия в цифровую среду
                    </p>
                </div>

                <div class="benefit-item">
                    <div class="benefit-item__num">
                        1
                    </div>
                    <div class="benefit-item__img">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/ben6.svg" alt="">
                    </div>
                    <p class="benefit-item__text">
                        Перенос ежедневно увеличивающегося объема данных  производственной безопасности предприятия в цифровую среду
                    </p>
                </div>

                <div class="benefit-item">
                    <div class="benefit-item__num">
                        1
                    </div>
                    <div class="benefit-item__img">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/ben7.svg" alt="">
                    </div>
                    <p class="benefit-item__text">
                        Перенос ежедневно увеличивающегося объема данных  производственной безопасности предприятия в цифровую среду
                    </p>
                </div>

                <div class="benefit-item">
                    <div class="benefit-item__num">
                        1
                    </div>
                    <div class="benefit-item__img">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/img/ben8.svg" alt="">
                    </div>
                    <p class="benefit-item__text">
                        Перенос ежедневно увеличивающегося объема данных  производственной безопасности предприятия в цифровую среду
                    </p>
                </div>


            </div>
        </div>
    </section>

<?php if (have_rows('moduli_sistemy_-_o_sisteme_-_vygody_ot_vnedreniya')): ?>

    <section class="text-img">
        <div class="text-img__text">
            <h2 class="text-img__title"><?php the_field('moduli_sistemy_-_o_sisteme_-_zagolovok'); ?></h2>
            <div class="text-img__subtitle"><?php the_field('moduli_sistemy_-_o_sisteme_-_podzagolovok'); ?></div>
            <div class="text-img__description"><?php the_field('moduli_sistemy_-_o_sisteme_-_kratkoe_opisanie'); ?></div>
            <div class="preproject">
                <h2 class="preproject__title"><?php the_field('moduli_sistemy_-_o_sisteme_-_vygody_-_zagolovok'); ?></h2>
                <div class="preproject__modules">

                    <?php while (have_rows('moduli_sistemy_-_o_sisteme_-_vygody_ot_vnedreniya')): the_row();

                        // переменные
                        $image = get_sub_field('ikonka');
                        $content = get_sub_field('opisanie');

                        ?>

                        <div class="preproject__module">
                            <div class="preproject__img"><img width="80" height="80" src="<?php echo $image['url']; ?>"
                                                              alt="<?php echo $image['alt'] ?>"/></div>
                            <div class="preproject__description"><?php echo $content; ?></div>
                        </div>

                    <?php endwhile; ?>

                </div>
            </div>
            <div class="text-img__block">

                <?php

                $image = get_field('moduli_sistemy_-_o_sisteme_-_itog_-_ikonka');

                if (!empty($image)): ?>

                    <img width="" height="" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"/>

                <?php endif; ?>

                <p class="text-img__text-orange"><?php the_field('moduli_sistemy_-_o_sisteme_-_itog_-_vyvod'); ?></p>
            </div>
        </div>

        <div class="text-img__img">

            <?php

            $image = get_field('moduli_sistemy_-_izobrazhenie_sekczii');

            if (!empty($image)): ?>

                <img width="598" height="624" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"/>

            <?php endif; ?>

        </div>
    </section>

<?php endif; ?>

<?php
get_footer();
