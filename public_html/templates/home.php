<header class="navbar-fixed-top">
	<div class="container">
		<h1>Angular Google Map Demo</h1>
		<div class="form-group">
			<input placeholder="search for location" autocorrect="off" autocapitalize="off" spellcheck="off" type="text" class="form-control" #search [formControl]="searchControl">
		</div>
	</div>
</header>

<div id="map-wrapper">
	<google-map></google-map>
</div>

<footer class="navbar-fixed-bottom">
	<div class="container">
		<div class="text-center">
			This is a footer. :P
		</div>
	</div>
</footer>