[![Build Status](https://travis-ci.org/ilmesi/angular-crazy-height.svg?branch=master)](https://travis-ci.org/ilmesi/angular-crazy-height)

# angular-crazy-height
Dead simple directive to setup height of any element with Angular

## Usage

### Percentage from window
```
<div resize-height="0.9">
  ...
</div>
```

### Percentage from related (not necessary parent)
```
<div id="big-daddy">
  <div resize-height="0.9" resize-related="#big-daddy">
    ...
  </div>
</div>
```