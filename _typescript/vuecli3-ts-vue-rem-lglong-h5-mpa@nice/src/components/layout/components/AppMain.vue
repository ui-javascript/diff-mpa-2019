<template>
	<div>
		<transition name="fade-transform" mode="out-in">
			<router-view/>
			<slot></slot>
		</transition>
	</div>
</template>
