<section>
    <?php 
    $params = array(
        //order by pods field "tidspunnkt" - asc
        'orderby' => 'CAST( tidspunkt.meta_value AS TIME )',
        //no max-limit (take all)
        'limit' => -1,
    );
    ?>

    <!-- ALL DAYS -->   
    <div class="table_cont">
    <p class="caption">Installationer</p>
    <table class="installations">
        <thead>
            <tr>
                <th>Skaber</th>
                <th>Type</th>
                <th>Sted</th>
            </tr>
        </thead>

        <tbody>

            <?php
            $all_days = pods('program', $params);

            while ($all_days->fetch()) {
                if ($all_days->field('altid')) {
                ?>
                <tr>
                    <td><?php echo $all_days->field('program_navn') ?></td>
                    <td><?php echo $all_days->field('program_type') ?></td>
                    <td><?php echo $all_days->field('sted') ?></td>
                </tr>
                <?php
                }
            }
            ?>
        </tbody>
    </table>
    </div>


    <!-- FRIDAY -->
    <div class="table_cont">
    <p class="caption">Fredag</p>
    <table class="friday">
        <thead>
            <tr>
                <th class="time">Tid</th>
                <th>Skaber</th>
                <th>Type</th>
                <th>Sted</th>
                <th>Info</th>
            </tr>
        </thead>

        <tbody>

            <?php
            $friday = pods('program', $params);

            while ($friday->fetch()) {
                if ($friday->field('fredag')) {
                    $time = substr($friday->field('tidspunkt'), 0, 5);

                    if ($friday->field('program_type') == 'speciel') {
                        ?>
                        <tr class="speciel">
                            <td class="time"><?php echo $time ?></td>
                            <td><?php echo $friday->field('program_navn') ?></td>
                        </tr>

                        <?php
                    } else {
                    ?>
                    <tr>
                        <td class="time"><?php echo $time ?></td>
                        <td><?php echo $friday->field('program_navn') ?></td>
                        <td><?php echo $friday->field('program_type') ?></td>
                        <td><?php echo $friday->field('sted') ?></td>
                        <td><?php echo $friday->field('info') ?></td>
                    </tr>
                    <?php
                    }
                }
            }
            ?>
        </tbody>    
    </table>
    </div>

    <!-- SATURDAY -->
    <div class="table_cont">
    <p class="caption">Lørdag</p>
    <table class="saturday">
        <thead>
            <tr>
                <th class="time">Tid</th>
                <th>Skaber</th>
                <th>Type</th>
                <th>Sted</th>
                <th>Info</th>
            </tr>
        </thead>

        <tbody>

            <?php
            $saturday = pods('program', $params);

            while ($saturday->fetch()) {
                if ($saturday->field('lordag')) {
                    $time = substr($saturday->field('tidspunkt'), 0, 5);

                    if ($saturday->field('program_type') == 'speciel') {
                        ?>
                        <tr class="speciel">
                            <td class="time"><?php echo $time ?></td>
                            <td><?php echo $saturday->field('program_navn') ?></td>
                        </tr>

                        <?php
                    } else {
                    ?>
                        <tr>
                            <td class="time"><?php echo $time ?></td>
                            <td><?php echo $saturday->field('program_navn') ?></td>
                            <td><?php echo $saturday->field('program_type') ?></td>
                            <td><?php echo $saturday->field('sted') ?></td>
                            <td><?php echo $saturday->field('info') ?></td>
                        </tr>
                    <?php
                    }
                }
            }
            ?>
        </tbody>    
    </table>
    </div>

    <!-- SUNDAY -->
    <div class="table_cont">
    <p class="caption">Søndag</p>
    <table class="sunday">
        <thead>
            <tr>
                <th class="time">Tid</th>
                <th>Skaber</th>
                <th>Type</th>
                <th>Sted</th>
                <th>Info</th>
            </tr>
        </thead>

        <tbody>

            <?php
            $sunday = pods('program', $params);

            while ($sunday->fetch()) {
                if ($sunday->field('sondag')) {
                    $time = substr($sunday->field('tidspunkt'), 0, 5);

                    if ($sunday->field('program_type') == 'speciel') {
                        ?>
                        <tr class="speciel">
                            <td class="time"><?php echo $time ?></td>
                            <td><?php echo $sunday->field('program_navn') ?></td>
                        </tr>

                        <?php
                    } else {
                    ?>
                    <tr>
                        <td class="time"><?php echo $time ?></td>
                        <td><?php echo $sunday->field('program_navn') ?></td>
                        <td><?php echo $sunday->field('program_type') ?></td>
                        <td><?php echo $sunday->field('sted') ?></td>
                        <td><?php echo $sunday->field('info') ?></td>
                    </tr>
                    <?php
                    }
                }
            }
            ?>
        </tbody>    
    </table>
    </div>
</section>