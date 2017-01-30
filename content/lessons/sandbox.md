+++
title = "Testing experimental features"
script = "sandbox.js"
+++

# Experimental features

[!](highlight)

# Animation

<a class="first-slide"></a>

Hello.

# Database

<a class="database"></a>

[!](columns 6:)

## Query

<textarea id="sql1" rows=14></textarea>
<button class="run">Run</button>

[!](split)

## Results

<div class="output"></div>

# Some queries

<a class="queries"></a>

[!](columns 4:)

Consider the following two relations:

$T =$

<script type=sql>
SELECT * FROM T;
</script>

$S =$

<script type=sql>
SELECT * FROM S;
</script>

[!](split)

Can you believe it?

$T\times S = $

<script type=sql>
SELECT * FROM T, S;
</script>

But the join is just:

<script type=sql>
SELECT * FROM T join S using (a);
</script>
