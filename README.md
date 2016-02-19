# angular-crazy-height
Dead simple directive to setup height of any element with Angular

## Usage

### Percentage from window
```
<div resize-height="0.9">
  ...
</div>
```

### Percentage from related (not neccesary parent)
```
<div id="big-daddy">
  <div resize-height="0.9" resize-related="0.9">
    ...
  </div>
</div>
```